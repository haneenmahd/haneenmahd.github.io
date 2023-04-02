interface ProjectDataNode {
    title: string
    description: string
    image: string
    year: number
}

const projectsData: ProjectDataNode[] = [
    {
        "title": "Health Profile",
        "description": "Manage and track health profiles of individuals in a minimal and clean dashboard",
        "image": require("../images/projects/thumbnail.jpg"),
        "year": 2022
    },
    {
        "title": "Noty",
        "description": "Simple and lightweight note-taking",
        "image": require("../images/projects/thumbnail.jpg"),
        "year": 2021
    },
    {
        "title": "TicTacGo",
        "description": "Online multiplayer tic tac toe game",
        "image": require("../images/projects/thumbnail.jpg"),
        "year": 2023
    },
    {
        "title": "Portfolio",
        "description": "Handcrafted my own porfolio from scratch",
        "image": require("../images/projects/thumbnail.jpg"),
        "year": 2022
    }
]

export default projectsData