const fs = require("fs").promises;
const path = require("path");
const theo = require("theo");

const optionsList = [
  {
    format: {
      type: "raw.json"
    },
    transform: {
      file: path.resolve(__dirname, "../tokens/typography.yml"),
      type: "raw"
    }
  },
  {
    format: {
      type: "scss"
    },
    transform: {
      file: path.resolve(__dirname, "../tokens/typography.yml"),
      type: "web"
    }
  },
  {
    format: {
      type: "ios.json"
    },
    transform: {
      file: path.resolve(__dirname, "../tokens/typography.yml"),
      type: "ios"
    }
  },
  {
    format: {
      type: "android.xml",
    },
    transform: {
      file: path.resolve(__dirname, "../tokens/typography.yml"),
      type: "android"
    }
  }
];

(async () => {
  try {
    await fs.mkdir(path.resolve(__dirname, "../build"), { recursive: true });

    const results = await Promise.all(optionsList.map(options => theo.convert(options)));

    const filenames = await Promise.all(results.map(async (result, index) => {
      const type = optionsList[index].format.type;
      const filename = path.resolve(__dirname, "../build", type === "scss" ? "web.scss" : type);

      await fs.writeFile(filename, result);

      return filename;
    }));

    console.log("Files written:");
    console.log(filenames.map(filename => `  ${filename}`).join('\n'));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();


