import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Card title="React TypeScript Card" footerText="This is the Footer">
        <p>This is a simple card component using React and TypeScript.</p>
        <Button
          label="Click Me"
          onClick={() => alert("Button Clicked")}
          disabled={true}
          varient="secondary"
        />
      </Card>
    </>
  );
}

export default App;
