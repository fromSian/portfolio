import Media from "../media";

const MediaWithPara = ({ direction = "right" }) => {
  return (
    <div className="clear-both">
      <Media direction={direction} />

      <div className="">
        <p className="break-all mb-4 leading-7">
          j;lauilere mjkjnvsdkfhweuityuirewfkdsjfhkw ;lauilere
          mjkjnvsdkfhweuityuirewfkdsjfhkw;lauilere
          mjkjnvsdkfhweuityuirewfkdsjfhkw;lauilere
          mjkjnvsdkfhweuityuirewfkdsjfhkw;lauilere
          mjkjnvsdkfhweuityuirewfkdsjfhkw;lauilere
          mjkjnvsdkfhweuityuirewfkdsjfhkw;lauilere
          mjkjnvsdkfhweuityuirewfkdsjfhkw;lauilere
        </p>
        <p className="break-all my-4">
          j;lauilere mjkjnvsdkfhweuityuirewfkdsjfhkw ;lauilere
          mjkjnvsdkfhweuityuirewfkdsjfhkw;lauilere
          mjkjnvsdkfhweuityuirewfkdsjfhkw;lauilere
          mjkjnvsdkfhweuityuirewfkdsjfhkw;lauilere
        </p>
      </div>
    </div>
  );
};

export default MediaWithPara;
