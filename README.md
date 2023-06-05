# Kanban-board

## Data Structure

The kanban board's data structure is represented as follows:

```javascript
dashboard = [
  {
    id: "123",
    title: "completed",
    list: [
      {
        taskId: "12345",
        title: "Do something",
        description: "This is description",
        createdAt: "2pm",
        activity: [
          {
            changes: "xyz added this card to todo",
            changedAt: "2pm",
          },
        ],
      },
    ],
    createdAt: "2pm",
    activity: [
      {
        changes: "xyz added this card to todo",
        changedAt: "2pm",
      },
    ],
  },
];
```

## Libraries

The following libraries are used in this project:

1. State management: Recoil
2. Drag and drop: react-beautiful-dnd
3. UI Library: Material UI

## Deployment

The project will be deployed on open platforms such as [render.com](https://render.com) or [vercel.com](https://vercel.com).

## Collaborators

The collaborators working on this project are:

1. Shivaram Dusa
2. Subhashree Sahoo
3. Shubham Sharma
4. Sandesh Ghadage

## Project Link

You can access the project at [https://kanban-e0dd.onrender.com/](https://kanban-e0dd.onrender.com/).

Feel free to explore the kanban board and its features!
