export default function StartingModel({
  setOpenModel,
}: {
  setOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div>
      <h1>Starting Model</h1>
      <button onClick={() => setOpenModel(false)}> Close</button>
    </div>
  );
}
