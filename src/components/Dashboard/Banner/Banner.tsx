import BottomBanner from "./BottomBanner";
import TopBanner from "./TopBanner";

function Banner() {
  return (
    <>
      <div className="flex flex-col">
        <TopBanner />
        <BottomBanner />
      </div>
    </>
  )
}

export default Banner