// Database storage containing localized technical code mappings
const conceptData = {
    data_types: {
        title: "Data Types",
        desc: "Data types represent the foundational data formats recognized natively by programming languages. They define how data is stored, what values it can contain, and what types of operations can be safely performed on that data structure.",
        code: `
# ==========================================
# STANDARD PRIMITIVE DATA TYPES
# ==========================================
# Integer: Represents whole numbers (positive, negative, or zero)
integer_var = 42

# Float: Represents floating-point numbers (decimals)
float_var = 3.14159

# Boolean: Represents truth values (logical True or False)
boolean_var = True

# String: Represents textual data (a sequence of characters)
string_var = "Hello, World!"

# Character: Represented in Python as a string of length 1
character_var = 'A'

# ==========================================
# COLLECTION & COMPOSITE DATA TYPES
# ==========================================
# List: An ordered, changeable sequence of items
list_var = [1, 2, 3, 4, 5]

# Tuple: An ordered, unchangeable sequence of items
tuple_var = (10, 20, 30)

# Dictionary: A collection of key-value pairs (a lookup table)
dict_var = {"username": "coder123", "access_level": 5}

# Set: An unordered collection of unique items with no duplicates
set_var = {1, 2, 2, 3}  # The duplicate '2' is automatically removed

        `
    },
    functions: {
        title: "Functions",
        desc: "Functions are modular, isolated blocks of reusable instructions created to isolate repetitive logic tasks. They optionally take inputs (parameters), run isolated processes, and pass an output dataset back using return parameters.",
        code: `# Defining and Executing Functions\ndef calculate_area(length, width):\n    """Calculates rectangular area."""\n    return length * width\n\n# Execution instance\nresult = calculate_area(10, 5)\nprint(f"Area output: {result}")`
    },
    operators: {
        title: "Operators",
        desc: "Operators are special mathematical symbols used to execute arithmetic transformations, structural variable updates, conditional comparison inequalities, and boolean conditional gate configurations inside programs.",
        code: `# Common Operators Example\nx = 10\ny = 3\n\n# Arithmetic operations\naddition = x + y          # Standard addition\nfloor_div = x // y        # Divides and rounds down\nmodulo = x % y            # Remainder output calculation`
    },
    list_comp: {
        title: "List Comprehension",
        desc: "List comprehension provides shorthand syntax loops inside Python to synthesize entirely new iterable lists dynamically from pre-existing sequences while filtering elements on a single explicit line of logic code.",
        code: `# Shorthand List Generation\nnumbers = [1, 2, 3, 4, 5, 6]\n\n# Synthesize squares only for even data values\neven_squares = [x**2 for x in numbers if x % 2 == 0]\nprint(even_squares)  # Output: [4, 16, 36]`
    },
    try_except: {
        title: "Try / Except Handling",
        desc: "Try/Except blocks intercept unexpected syntax failures or logical crashes during software runtime. This mechanism allows program execution threads to route around failures cleanly without fully crashing down the operating server process.",
        code: `# Defensive Exception Mapping\ntry:\n    user_input = "not_a_number"\n    converted = int(user_input)\nexcept ValueError as error:\n    print(f"Caught processing fault: {error}")\nfinally:\n    print("This terminal operation always runs.")`
    },
    file_handling: {
        title: "File I/O Handling",
        desc: "File handling tracks read and write streaming pathways out toward persistence disks. Python safely opens storage linkages via a context-manager tracking allocation system that closes connection paths automatically upon task completion.",
        code: `# Modern Context File Streaming\nfile_path = "log_report.txt"\n\n# Streaming data text payloads dynamically\nwith open(file_path, "w") as writer:\n    writer.write("SYSTEM CHECK: OK\\n")\n\n# Reading streaming information assets\nwith open(file_path, "r") as reader:\n    print(reader.read())`
    },
    oop: {
        title: "OOP Core Principles",
        desc: "Object-Oriented Programming centers design architectures around physical entities or logical payloads known as Objects. It utilizes structural pillars including Encapsulation (hiding state data), Inheritance (reusing blueprint parent nodes), and Polymorphism (overriding common execution forms).",
        code: `# Abstract Core Conceptual Logic Blueprint\nclass Vehicle:\n    def move(self):\n        pass\n\nclass Drone(Vehicle):\n    def move(self):\n        return "Propelling aerodynamically in 3D grid spatial vectors."`
    },
    classes: {
        title: "Classes & Objects",
        desc: "A Class functions as a strict schematic architectural template or structural blueprint. An Object represents a concrete, living instance constructed directly out of that underlying layout pattern, holding individual assigned values.",
        code: `# Base Structural Class Architecture\nclass ProfessionalCoder:\n    # Instance blueprint construction template\n    def __init__(self, username, preferred_language):\n        self.username = username\n        self.language = preferred_language\n\n# Instantiate programmatic data asset entity object\ndeveloper_profile = ProfessionalCoder("Alice", "Python")\nprint(developer_profile.username)`
    }
};

// Core selection execution routine switching terminal display matrices
function switchConcept(conceptKey) {
    // Safety exit sequence check
    if (!conceptData[conceptKey]) return;

    // Phase 1: Update configuration states across target string elements
    document.getElementById("concept-title").innerText = conceptData[conceptKey].title;
    document.getElementById("concept-desc").innerText = conceptData[conceptKey].desc;
    document.getElementById("concept-code").innerText = conceptData[conceptKey].code;

    // Phase 2: Manage UI active styling assignments across target matrix elements
    const buttons = document.querySelectorAll(".matrix-btn");
    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    // Extract target matching DOM entity element to attach state visual assets
    const activeTrigger = event.currentTarget;
    if (activeTrigger) {
        activeTrigger.classList.add("active");
    }
}

