import React, { useEffect, useState } from "react";
import {
  List,
  Plus,
  Minus,
  ChevronRight,
  ChevronDown,
  Trash2,
} from "lucide-react";

type TList = {
  type: "ordered" | "unordered";
  items: string[];
  subList?: TList[];
};

type ListProps = {
  list: TList;
  setList: (value: TList) => void;
};

const ListComponent = ({ list, setList }: ListProps) => {
  const [items, setItems] = useState<string[]>(list.items);
  const [type, setType] = useState<"ordered" | "unordered">(list.type);
  const [subLists, setSubLists] = useState<TList[]>(list.subList || []);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  useEffect(() => {
    const handleListUpdate = () => {
      if (
        items !== list.items ||
        type !== list.type ||
        JSON.stringify(subLists) !== JSON.stringify(list.subList)
      ) {
        setList({
          type,
          items,
          subList: subLists.length > 0 ? subLists : undefined,
        });
      }
    };
    const delayDebounce = setTimeout(handleListUpdate, 300);
    return () => clearTimeout(delayDebounce);
  }, [items, type, subLists, list, setList]);

  const addItem = () => {
    setItems([...items, ""]);
  };

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    const newSubLists = subLists.filter((_, i) => i !== index);
    setItems(newItems);
    setSubLists(newSubLists);
    setExpandedItems(expandedItems.filter((i) => i !== index));
  };

  const updateItem = (index: number, value: string) => {
    const newItems = [...items];
    newItems[index] = value;
    setItems(newItems);
  };

  const toggleSubList = (index: number) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((i) => i !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }

    if (!subLists[index]) {
      const newSubLists = [...subLists];
      newSubLists[index] = {
        type: "unordered",
        items: [""],
      };
      setSubLists(newSubLists);
    }
  };

  const updateSubList = (index: number, newSubList: TList) => {
    const newSubLists = [...subLists];
    newSubLists[index] = newSubList;
    setSubLists(newSubLists);
  };

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      {/* List Type Toggle */}
      <div className="flex items-center space-x-4">
        <List className="h-5 w-5 text-gray-500" />
        <select
          value={type}
          onChange={(e) => setType(e.target.value as "ordered" | "unordered")}
          className="block w-40 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
        >
          <option value="unordered">Unordered List</option>
          <option value="ordered">Ordered List</option>
        </select>
      </div>

      {/* List Items */}
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-start space-x-2">
              <span className="mt-2.5 w-6 text-right text-gray-500">
                {type === "ordered" ? `${index + 1}.` : "•"}
              </span>
              <div className="flex-1">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => updateItem(index, e.target.value)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  placeholder="List item..."
                />
              </div>
              <button
                onClick={() => toggleSubList(index)}
                className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {expandedItems.includes(index) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              <button
                onClick={() => removeItem(index)}
                className="p-2 text-red-500 hover:text-red-700 focus:outline-none"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>

            {/* Nested Sublist */}
            {expandedItems.includes(index) && subLists[index] && (
              <div className="ml-8">
                <ListComponent
                  list={subLists[index]}
                  setList={(newSubList) => updateSubList(index, newSubList)}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Add Item Button */}
      <button
        onClick={addItem}
        className="flex items-center space-x-2 text-sm text-blue-500 hover:text-blue-600 focus:outline-none"
      >
        <Plus className="h-4 w-4" />
        <span>Add item</span>
      </button>
    </div>
  );
};

export default ListComponent;
