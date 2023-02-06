import Group from "./assets/group.png";
import Folder from "./assets/folder.png";
import Clock from "./assets/clock.png";
import Selfie from "./assets/selfie.png";
import Words from "./assets/words.png";
import Nap from "./assets/nap.png";
import Memory from "./assets/memory.png";
import Star from "./assets/star.png";
import Holiday from "./assets/holiday.png";
import Radio from "./assets/radio.png";
import Idea from "./assets/idea.png";
import Snail from "./assets/snail.png";
import Frames from "./assets/frames.png";
import Donation from "./assets/donation.png";
import Breakfast from "./assets/breakfast.png";
import Project from "./assets/project.png";
import Clean from "./assets/clean.png";
import Language from "./assets/language.png";
import Flowers from "./assets/flowers.png";
import Staycation from "./assets/staycation.png";
import Cosy from "./assets/cosy.png";
import Dance from "./assets/dance.png";
import Song from "./assets/song.png";
import Hair from "./assets/hair.png";
import Face from "./assets/face.png";
import Calendar from "./assets/calendar.png";
import Pause from "./assets/pause.png";
import Airplane from "./assets/airplane.png";
import Food from "./assets/food.png";
import Camera from "./assets/camera.png";
import Shh from "./assets/shh.png";
import Garden from "./assets/garden.png";
import Menu from "./assets/menu.png";
import Shopping from "./assets/shopping.png";
import Friend from "./assets/friend.png";
import Watch from "./assets/watch.png";
import Hourglass from "./assets/hourglass";
import Laptop from "./assets/laptop.png";
import Conversation from "./assets/conversation.png";
import Phone from "./assets/phone.png";
import Chess from "./assets/chess.png";
import Support from "./assets/support.png";
import Unsubscribe from "./assets/unsubscribe.png";
import Tracker from "./assets/tracker.png";
import Book from "./assets/book.png";

const quotes = [
  {
    quote: "Get out and do some gardening.",
    altkey: "Greenhouse",
    image: Garden,
  },
  {
    quote: "Screen free activities: Get lost in a book.",
    altkey: "woman reading a book",
    image: Book,
  },
  {
    quote:
      "Track the amount of times you pick up your phone in a day - you will be surprised! Do this activity again in a week to see if it's less. ",
    altkey: "woman holding a journal",
    image: Tracker,
  },
  {
    quote:
      "Unsubscribe from unwanted emails. Less email notifications equals less digital distractions.",
    altkey: "unsubscribe bell",
    image: Unsubscribe,
  },
  {
    quote:
      "Let your friends and family know that you are on a digital detox and ask for their help and support.",
    altkey: "supportive friend",
    image: Support,
  },
  {
    quote:
      "Convert to black and white. One reason our devices are so alluring is that they're vibrant. Many smart phones now allow you to change the settings so that the entire phone appears in gray scale.",
    altkey: "black and white chess board",
    image: Chess,
  },
  {
    quote:
      "Take your work email off your phone (notify everyone in advance that you're doing this).",
    altkey: "woman using phone",
    image: Phone,
  },
  {
    quote: "Have a proper conversation catching up with an old friend.",
    altkey: "chat box",
    image: Conversation,
  },
  {
    quote:
      "Set email preferences to receive emails hourly instead of as they happen.",
    altkey: "laptop",
    image: Laptop,
  },
  {
    quote: "Set a timer to remind you to check your emails once an hour.",
    altkey: "hourglass",
    image: Hourglass,
  },
  {
    quote:
      "An old-fashiones watch will give you one less reason to constantly check your phone.",
    altkey: "vintage watch",
    image: Watch,
  },
  {
    quote:
      "Take a digital detox with someone else - you can encourage each other to keep going and plan activities together.",
    altkey: "friends",
    image: Friend,
  },
  {
    quote: "Take yourself on a shopping trip.",
    altkey: "Women shopping",
    image: Shopping,
  },
  {
    quote: "Visit a new restaurant.",
    altkey: "Pasta",
    image: Menu,
  },
  {
    quote: "Brainstorm some new ideas and thoughts.",
    altkey: "Lightbulb",
    image: Idea,
  },
  {
    quote:
      "Spend time in places where mobile phone use id frowned upon: Yoga class, group meditation, crafting groups.",
    altkey: "Finger on lips",
    image: Shh,
  },
  {
    quote: "Screen free activities: Try a new hobby or get lost in an old one.",
    altkey: "Camera",
    image: Camera,
  },
  {
    quote: "Put away your phone during meals.",
    altkey: "Meal",
    image: Food,
  },
  {
    quote: "Do something fun that you remember from your childhood.",
    altkey: "Paper plane",
    image: Airplane,
  },
  {
    quote:
      "Practise not responding immediately to every notification, set time aside to go back on these.",
    altkey: "Pause",
    image: Pause,
  },
  {
    quote:
      "Make time for periods of digital detox and write them down as you would any other appointment.",
    altkey: "Calendar",
    image: Calendar,
  },
  {
    quote:
      "Make yourself a home spa and give yourself a pamper, why not try a facial.",
    altkey: "Facial Skincare",
    image: Face,
  },
  {
    quote: "Experiment with your look, try something new with your hair.",
    altkey: "Hairstyle",
    image: Hair,
  },
  {
    quote: "Listen to your favorite song.",
    altkey: "Musical notes",
    image: Song,
  },
  {
    quote: "Get up and dance like nobody is watching.",
    altkey: "Dancing lady",
    image: Dance,
  },
  {
    quote: "Rearrange an area in your home, try creating a cosy corner.",
    altkey: "Cosy corner",
    image: Cosy,
  },
  {
    quote: "Take yourself on a solo date or staycation.",
    altkey: "Lady wearing a hat",
    image: Staycation,
  },
  {
    quote: "Plant some flowers in your garden or a window box.",
    altkey: "Flowers",
    image: Flowers,
  },
  {
    quote:
      "Why not try and learn a few words and phrases from another language.",
    altkey: "Lips",
    image: Language,
  },
  {
    quote: "Spring clean and tidy your home.",
    altkey: "Cleaning materials",
    image: Clean,
  },
  {
    quote: "Start a new DIY project.",
    altkey: "DIY Project",
    image: Project,
  },
  {
    quote: "Have a slow, relaxing morning.",
    altkey: "Breakfast",
    image: Breakfast,
  },
  {
    quote:
      "Sort through your clothes and set aside some items to donate to charity.",
    altkey: "Donation box",
    image: Donation,
  },
  {
    quote:
      "Look through old photographs and sort some pictures to hang on the wall.",
    altkey: "Frames",
    image: Frames,
  },
  {
    quote:
      "Take a walk along the beach or through the woods and hunt for natural treasures.",
    altkey: "Snail",
    image: Snail,
  },
  {
    quote:
      "Remove yourself from online groups that you don't need to be in, so you get less notifications.",
    altkey: "Group of people",
    image: Group,
  },
  {
    quote:
      "Listen to the radio in your spare time rather than scrolling on your phone or watching telly.",
    altkey: "Radio",
    image: Radio,
  },
  {
    quote: "Plan a holiday so you have something nice to look forward to.",
    altkey: "Holiday",
    image: Holiday,
  },
  {
    quote:
      "Star gaze. Observe the stars and the moon, you might see a shooting star!",
    altkey: "Star",
    image: Star,
  },
  {
    quote:
      "Try and think back to your very first memory, where were you, who you were with and how did you feel?",
    altkey: "Memory",
    image: Memory,
  },
  {
    quote:
      "Have a power nap. Research shows that a quick break can stop our brains from being overwhelmed.",
    altkey: "Eye Mask",
    image: Nap,
  },
  {
    quote: "Organize and de-clutter your desktop and folders.",
    altkey: "Folder",
    image: Folder,
  },
  {
    quote: "Challenge yourself to 24 hours tech free.",
    altkey: "Clock",
    image: Clock,
  },
  {
    quote: "Try drawing a selfie instead of snapping one.",
    altkey: "Woman Line Art",
    image: Selfie,
  },
  {
    quote: "Write down some words that best describe you and your loved ones.",
    altkey: "List of Words",
    image: Words,
  },
];

export default quotes;
