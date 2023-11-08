import { Button, Carousel, Typography, } from "@material-tailwind/react";

const Cover = () => {
  return (
    <Carousel className="max-w-[92%] mx-auto my-10 rounded-lg">
      <div className="relative h-[500px] w-full">
        <img
          src="https://i.ibb.co/VvXrdcD/programming-background-collage.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Welcome to Learn CSS!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              This course breaks down the fundamentals of CSS into digestible, easy to understand pieces. Over the next few modules, you well learn how the core aspects of CSS work and how to use them effectively in your projects. Use the menu pane by the Learn CSS logo to navigate the modules.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[500px]  w-full">
        <img
          src="https://i.ibb.co/X8gVN93/html-system-website-concept-1.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Welcome to Learn HTML!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Welcome to HTML! HyperText Markup Language, or HTML, is the backbone of the web, providing the content, as well as the structure of that content, that you see displayed in your web browser.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[500px] w-full">
        <img
          src="https://i.ibb.co/DDtQf0W/html-system-website-concept.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
          <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Programming Languages!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Most web pages contain a fairly standard set of content, including a title, text content, links to images, navigation links, headers and footers, and more. All of this information is stored as HTML that defines the structure of the page.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}


export default Cover;