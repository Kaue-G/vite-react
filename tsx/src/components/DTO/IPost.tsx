interface IComment {
    id: string;
    text: string;
}
interface IContent {
    id: string;
    type: 'paragraph' | 'link';
    content: string;
}
interface IAuthor {
    avatarUrl: string,
    name: string,
    role: string,
}
interface IPostProps {
    author: IAuthor,
    publishedAt: Date,
    content: IContent[],
    comments: IComment[];
}

export type { IAuthor, IComment, IContent, IPostProps }
