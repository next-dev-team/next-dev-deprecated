import { Button } from 'ui';
const DemoButton = () => {
  return (
    <div className="space-y-8 ">
      <div className="flex items-center justify-center space-x-2">
        <h5>primary</h5>
        <Button title="Primary" />
        <Button variant="outline" title="Outline" />
        <Button variant="primary" title="rounded" shape="rounded" />
      </div>
      {/* outline */}
      <div className="flex items-center justify-center space-x-2">
        <h5>outline</h5>
        <Button title="Primary" color="success" />
        <Button variant="outline" title="Outline" color="success" />
        <Button
          variant="primary"
          title="rounded"
          color="success"
          shape="rounded"
        />
      </div>
      {/* disabled */}
      <div className="flex items-center justify-center space-x-2">
        <h5>outline</h5>
        <Button title="Primary" color="success" isDisabled />
        <Button variant="outline" title="Outline" color="success" isDisabled />
        <Button
          variant="primary"
          title="rounded"
          color="success"
          shape="rounded"
          isDisabled
          onClick={() => {
            alert('hello');
          }}
        />
      </div>
    </div>
  );
};

export default DemoButton;
