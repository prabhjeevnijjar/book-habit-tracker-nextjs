const Heatmap = () => {
  return (
    <div className="mt-4 mx-4 flex flex-col justify-evenly items-center">
      <div>
        {[0, 0, 0, 0, 0, 0, 0].map((item, index) => {
          return <span className="mx-1 my-1 px-4  bg-lime-200 rounded" key={index}></span>;
        })}
      </div>
      <div className="mt-1">
        {[0, 0, 0, 0, 0, 0, 0].map((item, index) => {
          return <span className="mx-1 my-1 px-4  bg-lime-200 rounded" key={index}></span>;
        })}
      </div>
      <div className="mt-1">
        {[0, 0, 0, 0, 0, 0, 0].map((item, index) => {
          return <span className="mx-1 my-1 px-4  bg-lime-200 rounded" key={index}></span>;
        })}
      </div>
      <div className="mt-1">
        {[0, 0, 0, 0, 0, 0, 0].map((item, index) => {
          return <span className="mx-1 my-1 px-4  bg-lime-200 rounded" key={index}></span>;
        })}
      </div>
      <div className="mt-1">
        {[0, 0, 0, 0, 0, 0, 0].map((item, index) => {
          return <span className="mx-1 my-1 px-4  bg-lime-200 rounded" key={index}></span>;
        })}
      </div>
      <div className="mt-1">
        {[0].map((item, index) => {
          return <span className="mx-1 my-1 px-4  bg-lime-200 rounded" key={index}></span>;
        })}
      </div>
    </div>
  );
};

export default Heatmap;
