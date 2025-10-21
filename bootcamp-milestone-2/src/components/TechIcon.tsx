interface IconProps {
  image: string;
  name: string;
}

const TechIcon = ({ icon }: { icon: IconProps }) => {
  return (
    <div className="flex-center hover:-translate-y-3 transition-all duration-700">
      <img src={icon.image} alt={icon.name} className="md:size-16 size-10" />
    </div>
  );
};

export default TechIcon;
