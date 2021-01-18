import ComingSoon from "../components/coming-soon";
import CustomHead from "../components/custom-head";

function Shop() {
  return (
    <section className="shop">
      <CustomHead
        title="My Shop"
        description="Buy merchandize from your favorite tech blogger, Victor Ughonu"
      />
      <ComingSoon title="shop" />
    </section>
  );
}

export default Shop;
