import SectionContainer from "./Layouts/SectionContainer";

const tiles = [
  { name: "EspoCRM", color: "#3C8DBC", shadow: "rgba(60,141,188,0.5)" },
  { name: "OpenProject", color: "#007BB6", shadow: "rgba(0,123,182,0.5)" },
  { name: "Nextcloud", color: "#0082C9", shadow: "rgba(0,130,201,0.5)" },
  { name: "Rocket.Chat", color: "#F5455C", shadow: "rgba(245,69,92,0.5)" },
  { name: "Zammad", color: "#F4B400", shadow: "rgba(244,180,0,0.5)" },
  { name: "Metabase", color: "#509EE3", shadow: "rgba(80,158,227,0.5)" },
  { name: "Future App", color: "#9CA3AF", shadow: "rgba(156,163,175,0.5)" },
  { name: "Future App", color: "#9CA3AF", shadow: "rgba(156,163,175,0.5)" },
  { empty: true },
  { empty: true },
];

const Tile = ({ name, color, shadow, empty }) => (
  <div
    className={`flex h-24 items-center justify-center rounded-md ${
      empty
        ? "border-2 border-dashed border-neutral-300"
        : "font-medium text-white"
    }`}
    style={
      empty ? {} : { backgroundColor: color, boxShadow: `0 4px 6px ${shadow}` }
    }
  >
    {!empty && name}
  </div>
);

const AppTiles = () => (
  <SectionContainer className="py-12">
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {tiles.map((tile, idx) => (
        <Tile key={idx} {...tile} />
      ))}
    </div>
  </SectionContainer>
);

export default AppTiles;
