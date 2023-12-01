# Advent of Code Template Project

This project is designed to help you organize your Advent of Code project solutions and inputs by creating a folder structure for each day's challenges. The structure includes separate directories for source code (`src`) and test code (`test`) with sample input and solution files.

## Prerequisites

You'll need the following:

- Bash (Shell)
- A text editor (optional but recommended)

## Usage

1. Open a terminal and navigate to the project directory.

2. Make the script executable by running the following command:

```bash
chmod +x ./scripts/setupProject.sh
```

3. Run the script to generate the folder structure:

**Important** notice here: this script will create `.py` files for all days, this can be changed by editing lines 28, 29 and 34, 35 inside `./scripts/setupProjects.sh`.

```bash
./scripts/setupProject.sh
```

4. After running the script, you will find a folder structure like this in the project directory:

```
advent-of-code-2023/ <--- the year is depending on your setup
├── day01/
│   ├── src/
│   │   ├── input/
│   │   │   ├── input.txt
│   │   │   └── input2.txt
│   │   └── solutions/
│   │       ├── problemA.py
│   │       └── problemB.py
│   └── test/
├── day02/
│   ├── src/
│   │   ├── input/
│   │   └── solutions/
│   └── test/
├── ...
└── day25/
    ├── src/
    │   ├── input/
    │   └── solutions/
    └── test/
```

5. You can then use these folders to organize your Advent of Code solutions and inputs for each day.

### Customization

You can customize the generated structure and script to meet your specific needs. For example, you can modify the script to create additional files or directories within each day's folder.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

