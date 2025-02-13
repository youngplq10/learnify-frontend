export interface category{
    id: {
        timestamp: number,
        date: Date,
    },
    name: string,
}

export interface user{
    id: {
        timestamp: number,
        date: Date,
    },
    username: string,
    email: string,
    createdAtDate: Date,
    creatingCourses: course[],
    learningCourses: course[],
}

export interface review{
    id: {
        timestamp: number,
        date: Date,
    },
    creator: user,
    stars: number,
    reviewBody: string,
    createdAtDate: Date,
}

export interface lesson{
    id: {
        timestamp: number,
        date: Date,
    },
    course: course,
    title: string,
    description: string,
    videoLink: string,
    bannerImageLink: string,
    createdAtDate: Date
}

export interface course{
    id: {
        timestamp: number,
        date: Date,
    },
    creator: user,
    title: string,
    description: string,
    videoLink: string,
    bannerImageLink: string,
    category: category,
    lessons: lesson[],
    reviews: review[],
}