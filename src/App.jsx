import UpvotesList from "./components/UpvotesList";

function App() {
  return (
    <div style={{ userSelect: "none" }}>
      <h1>Upvotes Tech Assignment</h1>
      <UpvotesList />
      <p>Done by: Donitha Michael</p>
      <p>
        Note: Added a remove button to remove the upvote data from local
        storage.
      </p>
    </div>
  );
}

export default App;
