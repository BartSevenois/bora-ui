import Typography from "@/ui/elements/Typography/Typography";
import Container from "@/ui/content/Container";
import Rating from "@/ui/data/Rating/Rating";
import Testimental from "@/ui/content/Testimental/Testimental";

const Testimentals = () => {
  const testimentals = [
    {
      text: "Qui ullamco excepteur esse labore aute elit sint sunt velit qui laborum deserunt occaecat. Esse consequat amet velit cillum amet amet. Magna est ea in aute incididunt culpa eu adipisicing incididunt consectetur non dolor. Qui deserunt aliquip qui incididunt eu exercitation nostrud aute esse labore culpa aliqua et.",
      rating: 4,
      name: "Bart Sevenois",
      image: "./images/person-2.jpg",
    },
    {
      text: "Qui ullamco excepteur esse labore aute elit sint sunt velit qui laborum deserunt occaecat. Esse consequat amet velit cillum amet amet. Magna est ea in aute incididunt culpa eu adipisicing incididunt consectetur non dolor. Qui deserunt aliquip qui incididunt eu exercitation nostrud aute esse labore culpa aliqua et.",
      rating: 3.5,
      name: "Eefje Sevenois",
      image: "./images/person-1.jpg",
    },
  ];
  return (
    <Container className="py-20 bg-zinc-50">
      <Typography type="h1" alignment="center">
        Testimentals
      </Typography>
      <div className="flex justify-center">
        <Typography className="w-2/3 mt-8" alignment="center">
          Duis sunt exercitation labore veniam pariatur adipisicing. Minim ea
          sit excepteur elit deserunt veniam. Sit sit et voluptate deserunt ut
          quis adipisicing voluptate officia. Labore ipsum nulla enim labore
          tempor fugiat cillum ad nostrud labore quis.
        </Typography>
      </div>
      <div className="grid grid-cols-2 mt-14 gap-20">
        {testimentals.map((testimental) => (
          <Testimental
            rating={testimental.rating}
            text={testimental.text}
            name={testimental.name}
            image={testimental.image}
          />
        ))}
      </div>
    </Container>
  );
};

const Icon = () => (
  <svg
    clip-rule="evenodd"
    width={50}
    height={50}
    className="fill-zinc-400"
    fill-rule="evenodd"
    stroke-linejoin="round"
    stroke-miterlimit="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m21.301 4c.411 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.738 4.129-4.308 4.129-3.24 0-4.83-2.547-4.83-5.307 0-5.98 6.834-10.693 8.468-10.693zm-10.833 0c.41 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.739 4.129-4.308 4.129-3.241 0-4.83-2.547-4.83-5.307 0-5.98 6.833-10.693 8.468-10.693z"
      fill-rule="nonzero"
    />
  </svg>
);

export default Testimentals;
