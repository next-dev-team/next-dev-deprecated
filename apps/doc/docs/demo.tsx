import { Button } from 'ui';
const DemoButton = () => {
  return (
    <div className="flex space-x-2 justify-center">
      <Button title="Primary" />
      <Button variant="outline" title="Outline" />
    </div>
  );
};

export default DemoButton;
