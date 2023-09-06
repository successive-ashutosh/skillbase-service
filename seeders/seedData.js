const mongoose = require('mongoose');

const generateObjectId = () => new mongoose.Types.ObjectId();


const taxonomies = [
    {
        name: 'Programming Languages',
        description: 'Languages used for software development',
    },
    {
        name: 'Web Development',
        description: 'Technologies used for building websites and web applications',
    },
    {
        name: 'Data Science',
        description: 'Analyzing and interpreting complex data sets',
    },
    {
        name: 'Machine Learning',
        description: 'Creating algorithms that can improve themselves over time',
    },
];

const categories = [
    {
        name: 'Front-end Development',
        description: 'Creating user interfaces and interactions for web applications',
        taxonomy: 'Web Development',
    },
    {
        name: 'Back-end Development',
        description: 'Managing server-side logic and databases',
        taxonomy: 'Web Development',
    },
    {
        name: 'Python',
        description: 'A versatile and powerful programming language',
        taxonomy: 'Programming Languages',
    },
    {
        name: 'JavaScript',
        description: 'A scripting language used for web development',
        taxonomy: 'Programming Languages',
    },
    {
        name: 'Data Analysis',
        description: 'Exploring and interpreting data to discover insights',
        taxonomy: 'Data Science',
    },
    {
        name: 'Supervised Learning',
        description: 'Training models with labeled data for predictions',
        taxonomy: 'Machine Learning',
    },
];

const skills = [
    {
        uuid: '1',
        name: 'React.js',
        description: 'A popular JavaScript library for building user interfaces',
        category: generateObjectId(), // Placeholder for category ID
        taxonomy: {
            id: generateObjectId(), // Placeholder for taxonomy ID
            name: 'Web Development',
        },
        versions: [
            {
                uuid: 'version_1',
                name: '16.0.0',
                weightage: 0.8,
            },
            {
                uuid: 'version_2',
                name: '17.0.0',
                weightage: 0.9,
            },
        ],
        default_version: {
            uuid: 'version_2',
            name: '17.0.0',
            weightage: 0.9,
        },
        matrix: generateObjectId(), // Placeholder for matrix ID
        interviewers: [
            {
                uuid: generateObjectId(),
                name: 'John Doe',
            },
        ],
        user_count: {
            1: 10,
            2: 20,
            3: 15,
            4: 25,
            5: 30,
        },
        created_at: new Date(),
        updated_at: new Date(),
        created_by: generateObjectId(), // Placeholder for user ID
        updated_by: generateObjectId(), // Placeholder for user ID
    },
    {
        uuid: '2',
        name: 'Node.js',
        description: 'A runtime environment for server-side JavaScript applications',
        category: generateObjectId(), // Placeholder for category ID
        taxonomy: {
            id: generateObjectId(), // Placeholder for taxonomy ID
            name: 'Web Development',
        },
        versions: [
            {
                uuid: 'version_3',
                name: '14.0.0',
                weightage: 0.7,
            },
            {
                uuid: 'version_4',
                name: '16.0.0',
                weightage: 0.8,
            },
        ],
        default_version: {
            uuid: 'version_4',
            name: '16.0.0',
            weightage: 0.8,
        },
        matrix: generateObjectId(), // Placeholder for matrix ID
        interviewers: [
            {
                uuid: generateObjectId(),
                name: 'Jane Smith',
            },
        ],
        user_count: {
            1: 15,
            2: 25,
            3: 20,
            4: 30,
            5: 35,
        },
        created_at: new Date(),
        updated_at: new Date(),
        created_by: generateObjectId(), // Placeholder for user ID
        updated_by: generateObjectId(), // Placeholder for user ID
    },
];

module.exports = {
    taxonomies,
    categories,
    skills,
};
