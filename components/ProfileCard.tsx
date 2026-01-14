type Props = {
  name: string;
  role: string;
  image: string;
};

export default function ProfileCard({ name, role, image }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        src={image}
        alt={name}
        className="w-40 h-40 mx-auto rounded-full object-cover mb-4 border-4 border-blue-600"
      />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-blue-600">{role}</p>
    </div>
  );
}
