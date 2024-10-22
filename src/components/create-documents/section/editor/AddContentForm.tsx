import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

type AddContentFormProps = {
  onAdd: (type: string) => void;
  onCancel: () => void;
};

export const AddContentForm: React.FC<AddContentFormProps> = ({
  onAdd,
  onCancel,
}) => {
  const [contentType, setContentType] = useState<string>("");

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-medium text-gray-900">Add New Content</h3>
        <button
          onClick={onCancel}
          className="text-gray-400 hover:text-gray-500"
        >
          <RxCross2 />
        </button>
      </div>

      <div className="space-y-2">
        <select
          id="content-type"
          className="block py-2 px-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          value={contentType}
          onChange={(e) => setContentType(e.target.value)}
        >
          <option value="">Select content type...</option>
          <option value="heading">Heading</option>
          <option value="paragraph">Paragraph</option>
          <option value="figure">Figure</option>
          <option value="subsection">Child Section</option>
        </select>
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={() => contentType && onAdd(contentType)}
          disabled={!contentType}
          className="px-3 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add
        </button>
      </div>
    </div>
  );
};
