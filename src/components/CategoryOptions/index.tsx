import Link from "next/link";

export default function CategoryOptions() {
  const categories = [
    {
      name: "Women's clothing",
      path: "women's clothing",
    },
    {
      name: "Men's clothing",
      path: "men's clothing",
    },
    {
      name: "Electronics",
      path: "electronics",
    },
    {
      name: "Jewelry",
      path: "jewelry",
    },
  ];

  return (
    <ul className="min-w-full px-6 flex gap-2 overflow-x-auto">
      {categories.map((category, index: number) => (
        <li key={index}>
          <Link
            className="bg-gray-400 p-4 whitespace-nowrap rounded-lg overflow-hidden"
            href={`/store/category/${category.path}`}
          >
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
