import uuid from 'uuid'

export default function()
{
  return [
    {
        id: uuid.v4(),
        title: "Business website",
        category: "Web design"
    },
    {
        id: uuid.v4(),
        title: "Social App",
        category: "Mobile Dev"
    },
    {
        id: uuid.v4(),
        title: "Shopping cart",
        category: "Web Dev"
    }
  ];
}
