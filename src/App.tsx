import './App.scss';
import { Button, Input, Label } from '../lib/main';

function App() {
  return (
    <div className="demo">
      <Label>Some label</Label>
      <Input />
      <Button onClick={() => console.log('Hello, world!')}>Click me!</Button>
    </div>
  );
}

export default App;
