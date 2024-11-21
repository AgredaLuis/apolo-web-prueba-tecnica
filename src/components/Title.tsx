

interface Props {
  title: string;
}

const Title= ({ title } : Props) => {
  return (
    <h1 className="text-3xl font-bold tracking-tighter text-green-600 text-center mb-8">
      {title}
    </h1>
  );
};

export default Title;