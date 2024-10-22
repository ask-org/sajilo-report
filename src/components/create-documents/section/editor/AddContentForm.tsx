import React, { useState } from "react";
import Button from "../../../../ui/Button";

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
    <div className="flex flex-col my-4">
      <label htmlFor="content-type" className="mb-2">
        Select content type:
      </label>
      <select
        id="content-type"
        className="p-2 border border-gray-300 rounded"
        value={contentType}
        onChange={(e) => setContentType(e.target.value)}
      >
        <option value="">Select</option>
        <option value="heading">Heading</option>
        <option value="paragraph">Paragraph</option>
        <option value="figure">Figure</option>
        <option value="subsection">Child Section</option>
      </select>

      <Button onClick={() => contentType && onAdd(contentType)}>Add</Button>
      <Button onClick={onCancel}>Cancel</Button>
    </div>
  );
};
