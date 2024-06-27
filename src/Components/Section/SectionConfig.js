import reactLogo from "../../assets/logo_dark.svg";
import screen1 from "../../assets/img1.png";
import platform from "../../assets/platform.png";
import framwork from "../../assets/framwork.png";
import interactivity from "../../assets/interactivity.png";
import markup from "../../assets/markup.png";
import { darkTheme } from "../../styles/theme";
import CustomButton from "../Buttons/CustomButton";
import CodeIcon from "@mui/icons-material/Code";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const sectionConfig = [
  {
    img: reactLogo,
    imgOrder: "first",
    title: "React",
    backgroundColor: darkTheme.palette.primary.main,
    subTitle: "The library for web and native user interfaces",
    btn: (
      <CustomButton
        bgColor={"#58C4DC"}
        borderRadius={"50px"}
        color={"#4A7A8D"}
        border={"1px solid #c2c2c2"}
      >
        Learn React
      </CustomButton>
    ),
    darkBtn: (
      <CustomButton
        bgColor={"#252932"}
        borderRadius={"50px"}
        color={"#fff"}
        border={"1px solid #c2c2c2"}
      >
        API References
      </CustomButton>
    ),
  },
  {
    img: screen1,
    imgOrder: "second",
    title: "Create user interfaces from components",
    backgroundColor: "#191B21",
    subTitle:
      "React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.",
    btn: false,
    discription:
      "Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.",
  },
  {
    img: markup,
    imgOrder: "second",
    title: "Write components with code and markup",
    backgroundColor: "#232730",
    subTitle:
      "React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.",
    btn: false,
    discription:
      "This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. Putting JSX markup close to related rendering logic makes React components easy to create, maintain, and delete.",
  },
  {
    img: interactivity,
    imgOrder: "second",
    title: "Add interactivity wherever you need it",
    backgroundColor: "#191B21",
    subTitle:
      "React components receive data and return what should appear on the screen. You can pass them new data in response to an interaction, like when the user types into an input. React will then update the screen to match the new data.",
    btn: (
      <CustomButton
        sx={{
          color: "white",
          borderRadius: "999px",
          border: "1px solid #2C303B",
          marginTop: "27px",
        }}
        component="label"
        role={undefined}
        variant="outlined"
        tabIndex={-1}
        startIcon={<CodeIcon />}
        endIcon={<ArrowForwardIosIcon fontSize="small" />}
      >
        Add React to your page
      </CustomButton>
    ),
    discription:
      "You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.",
  },

  {
    img: framwork,
    imgOrder: "second",
    title: "Go full-stack with a framework",
    backgroundColor: "#232730",
    subTitle:
      "React is a library. It lets you put components together, but it doesn’t prescribe how to do routing and data fetching. To build an entire app with React, we recommend a full-stack React framework like Next.js or Remix.",
    btn: (
      <CustomButton
        sx={{
          color: "white",
          borderRadius: "999px",
          border: "1px solid #2C303B",
          marginTop: "27px",
        }}
        component="label"
        role={undefined}
        variant="outlined"
        tabIndex={-1}
        startIcon={<CodeIcon />}
        endIcon={<ArrowForwardIosIcon fontSize="small" />}
      >
        Get Started With Framework
      </CustomButton>
    ),
    discription:
      "React is also an architecture. Frameworks that implement it let you fetch data in asynchronous components that run on the server or even during the build. Read data from a file or a database, and pass it down to your interactive components.",
  },

  {
    img: platform,
    imgOrder: "second",
    title: "Use the best from every platform",
    backgroundColor: "#191B21",
    subTitle:
      "People love web and native apps for different reasons. React lets you build both web apps and native apps using the same skills. It leans upon each platform’s unique strengths to let your interfaces feel just right on every platform.",
    btn: (
      <CustomButton
        sx={{
          color: "white",
          borderRadius: "999px",
          border: "1px solid #2C303B",
          marginTop: "27px",
        }}
        component="label"
        role={undefined}
        variant="outlined"
        tabIndex={-1}
        startIcon={<CodeIcon />}
        endIcon={<ArrowForwardIosIcon fontSize="small" />}
      >
        Build for native platforms
      </CustomButton>
    ),
    discription:
      "React is also an architecture. Frameworks that implement it let you fetch data in asynchronous components that run on the server or even during the build. Read data from a file or a database, and pass it down to your interactive components.",
  },
];
export default sectionConfig;
