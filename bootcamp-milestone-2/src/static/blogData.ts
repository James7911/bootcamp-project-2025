
export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  content: string;
}

const blogs: Blog[] = [
  {
    title: "Green Computing",
    date: "October 15, 2025",
    description: "Learn how to reduce technology's environmental impact through responsible use and recycling.",
    image: "/images/green_computing.jpg",
    imageAlt: "Green computing illustration",
    slug: "green-computing",
    content: `
      <p>Green computing is the idea that technology should be used responsibly to reduce its impact on the environment. 
      This includes reusing devices when possible and safely disposing of broken equipment. For example, batteries should be 
      removed and taken to hazardous waste collection sites or certified electronics recyclers to prevent toxic metals and corrosive materials 
      from polluting the environment. Green computing also promotes recycling old parts to reduce waste and the use of energy-efficient technology 
      to lower energy costs. Green computing is an important topic that will help us keep our planet healthy and reducing our carbon emissions.</p>
    `,
  },
  {
    title: "The Importance of a Good Password",
    date: "October 15, 2025",
    description: "Why strong, unique passwords are critical to protecting your digital life.",
    image: "/images/password.png",
    imageAlt: "Strong password concept",
    slug: "good-password",
    content: `
      <p>Many people today don't think they need to create a strong password. They tell themselves they're 
      not important enough to be hacked. But that mindset makes them an easy target for hackers who are 
      looking for weak security. It’s much easier for a hacker to break into an account with a simple password 
      than to go after someone with top level protection, so anyone can be a target.</p>
      <p>That’s why you should make sure your passwords are strong and avoid using the same one across all your accounts. 
      If a hacker breaches one site, they could access everything, including your email, banking, and social media. 
      It’s always a good idea to create strong, secure passwords. A strong password should include a mix of random words, 
      numbers, and special characters (e.g., RedHungrySteve27!). Taking the time to build strong passwords can help protect 
      your personal information and prevent it from being stolen.</p>
    `,
  },
];

export default blogs;