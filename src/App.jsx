import Task1 from "./tasks/Task1";
import Task2 from "./tasks/Task2";

const App = () => {
  return (
    <div>
      <div className="h-[80vh] flex flex-col items-center px-6 py-4">
        <h1 className="text-3xl font-bold text-red-600 mb-0 text-center">
          Note : This is Task 1 !!, Please scroll for Task 2 !!
        </h1>
        <Task1 />
      </div>

      <div className="text-center italic text-emerald-500 font-medium text-lg my-8">
        Please scroll to view Task 2
      </div>

      <div className="flex flex-col items-center px-6 py-0">
        <h1 className="text-3xl font-bold text-orange-500 mb-4 text-center">
          Task 2 !! Task 2 !! Task 2 !! 
        </h1>
        <Task2 />
      </div>
    </div>
  );
};

export default App;
