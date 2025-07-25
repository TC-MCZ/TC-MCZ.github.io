// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-chengzhen-meng",
    title: "Chengzhen Meng",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-precise-uav-mmw-vision-positioning-was-accpeted-by-jsac-2024",
          title: 'Precise UAV MMW-Vision Positioning was accpeted by JSAC 2024! 😊 ✨',
          description: "",
          section: "News",},{id: "news-calibformer-was-accpeted-by-icra-2024",
          title: 'Calibformer was accpeted by ICRA 2024! 😊 ✨',
          description: "",
          section: "News",},{id: "news-mmplace-was-accpeted-by-ral-2024",
          title: 'mmPlace was accpeted by RAL 2024! 😊 ✨',
          description: "",
          section: "News",},{id: "news-farfusion-was-accpeted-by-ral-2024",
          title: 'FARFusion was accpeted by RAL 2024! 😊 ✨',
          description: "",
          section: "News",},{id: "news-see-through-vehicles-was-accpeted-by-mobicom-2024",
          title: 'See Through Vehicles was accpeted by MobiCom 2024! 😊 ✨',
          description: "",
          section: "News",},{id: "news-crplace-was-accpeted-by-iros-2024",
          title: 'CRPlace was accpeted by IROS 2024! 😊 ✨',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
