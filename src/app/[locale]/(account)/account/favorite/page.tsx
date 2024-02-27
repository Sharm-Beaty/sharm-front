import Favorite from "@/component/Account/Favorite/Favorite";

export default function MyFavorite({ params }: { params: { locale: string } }) {
  const { locale } = params;
  return (
    <>
      {/* {locale} */}
      <Favorite />
    </>
  );
}
