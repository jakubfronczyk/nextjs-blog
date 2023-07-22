import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "blogposts");

export function getSortedPostsData() {
    //get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPosts = fileNames.map((fileName) => {
        //remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");

        //read md file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        //use gray-matter to parse the post metada section
        const matterResult = matter(fileContents);

        const blogPost: BlogPost = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
        };

        //combine the data with the id
        return blogPost;
    });

    //sort posts by date
    return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);

    const contentHtml = processedContent.toString();

    const blogPostWithHTML: BlogPost & { contentHtml: string } = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        contentHtml,
    };

    // Combine the data with the id
    return blogPostWithHTML;
}