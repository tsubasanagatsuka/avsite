const Tag = () => {
  return (
    <a href="" className="inline-block bg-[#d8b0c3] p-1 rounded-md text-[12px]">
      #タグ
    </a>
  );
};
const Card = ({
  title,
  img,
  text,
}: {
  title: string;
  img: string;
  text: string;
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={img} alt="Example Image" />
      <p>{text}</p>
    </div>
  );
};

export default function Page() {
  return (
    <div className="grid grid-flow-col gap-4">
      <div className="flex flex-col p-5 bg-white">
        <h2 className="font-bold text-[24px] mb-5">AV女優の作品一覧</h2>
        <div className="flex">
          <p>本日更新情報 更新日時</p>
          <div className="grid grid-cols-3 gap-4">
            <Card
              title={"MGS動画"}
              img={"https://placehold.jp/250x150.png"}
              text={"AV女優に関する情報やレビューをここに記載します。"}
            />
            <Card
              title={"FANZA動画"}
              img={"https://placehold.jp/250x150.png"}
              text={"AV女優に関する情報やレビューをここに記載します。"}
            />
            <Card
              title={"FANZA素人動画"}
              img={"https://placehold.jp/250x150.png"}
              text={"AV女優に関する情報やレビューをここに記載します。"}
            />
          </div>
        </div>
      </div>
      <div className="bg-white max-w-[280px] p-5">
        <h3 className="text-[20px] font-bold mb-5">カテゴリー</h3>
        <div className="flex flex-wrap gap-2">
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
        </div>
      </div>
    </div>
  );
}
