import { Circle } from "lucide-react";

type TList = {
  type: "ordered" | "unordered";
  items: string[];
  subList?: TList[];
};

const ListRenderer = ({ list }: { list: TList }) => {
  const renderListItems = (
    items: string[],
    type: "ordered" | "unordered",
    level: number = 0,
  ) => {
    const ListTag = type === "ordered" ? "ol" : "ul";

    return (
      <ListTag
        className={`space-y-2 ${type === "ordered" ? "list-decimal" : "list-none"} ${
          level > 0 ? "mt-2" : ""
        }`}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex items-start gap-2 ${level > 0 ? "ml-6" : ""}`}
          >
            {type === "unordered" && (
              <span className="mt-1 flex-shrink-0">
                {level === 0 ? (
                  <Circle className="h-2 w-2 fill-current text-gray-600" />
                ) : (
                  <Circle className="h-2 w-2 text-gray-400" />
                )}
              </span>
            )}
            <span className="flex-1 text-gray-700">{item}</span>
          </li>
        ))}
      </ListTag>
    );
  };

  const renderNestedList = (list: TList, level: number = 0) => {
    return (
      <div className="space-y-1">
        {renderListItems(list.items, list.type, level)}
        {list.subList?.map((subList, index) => (
          <div key={index} className="ml-6">
            {renderNestedList(subList, level + 1)}
          </div>
        ))}
      </div>
    );
  };

  return <div className="py-2">{renderNestedList(list)}</div>;
};

export default ListRenderer;
