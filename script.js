// Database storage containing localized technical code mappings
const conceptData = {
  data_types: {
    title: "Data Types",
    desc: "Data types represent the foundational data formats recognized natively by programming languages. They define how values are allocated in memory, what values a variable can hold, and what structural or mathematical operations can be safely performed on that data layout. In Python, data types are broadly split between primitives (immutable scalar values like integers, floats, booleans, and strings) and collections/composites (mutable or immutable structures like lists, tuples, dictionaries, and sets used to hold groups of values). Understanding these types prevents type errors and ensures optimized memory utilization.",
    code: `
# =====================================================================
# STANDARD PRIMITIVE DATA TYPES (Scalar / Immutable values)
# =====================================================================

# Integer: Represents positive or negative whole numbers without decimals
user_age = 29
item_count = -15

# Float: Represents real numbers containing one or more decimal points
pi_value = 3.14159265
account_balance = 1550.75

# Boolean: Represents truth-value evaluations (Logical True or False)
is_authenticated = True
has_premium_access = False

# String: Represents text sequences wrapped in single, double, or triple quotes
user_greeting = "Welcome back, developer!"
multi_line_text = """This is a comprehensive
multi-line string block."""

# Character: Python treats characters simply as strings of length 1
keyboard_stroke = 'A'

# =====================================================================
# COLLECTION & COMPOSITE DATA TYPES (Data Structures)
# =====================================================================

# List: An ordered, mutable (changeable) collection allowing duplicates
shopping_cart = ["laptop", "mouse", "keyboard", "mouse"]
shopping_cart.append("monitor")  # Modifying the list dynamically

# Tuple: An ordered, immutable (unchangeable) sequence used for fixed records
server_coordinate = (40.7128, -74.0060)  # Latitude and Longitude pair

# Dictionary: A mutable collection of key-value mappings for rapid lookups
user_profile = {
    "username": "dev_nexus",
    "clearance_level": 4,
    "is_active": True
}
# Accessing a value via its key
current_user = user_profile["username"]

# Set: An unordered collection of unique elements; automatically drops duplicates
network_ports = {80, 443, 8080, 443}  # Duplicated 443 will be eliminated
`
  },
  functions: {
    title: "Functions",
    desc: "Functions are modular, isolated blocks of reusable instructions created to isolate repetitive logic tasks, reduce code duplication, and enforce clean design architecture. They can accept input values called parameters, establish a local scope for executing operations safely, and pass data structures back to the calling environment via an explicit return statement. Clean function design incorporates default arguments, type hinting, and descriptive docstrings to explicitly state the function's structural purpose, inputs, and output behaviors.",
    code: `
# =====================================================================
# FUNCTION DEFINITION, DEFAULTS, AND COMPREHENSIVE EXECUTION
# =====================================================================

def calculate_invoice_total(subtotal, tax_rate=0.08, discount=0.0):
    """
    Calculates the final invoice price after applying tax and discounts.
    
    Parameters:
        subtotal (float): The base cost of items.
        tax_rate (float): The regional tax multiplier (default 8%).
        discount (float): Flat rate cash deduction (default 0.0).
        
    Returns:
        float: The calculated grand total.
    """
    if subtotal <= 0:
        return 0.0
        
    # Apply flat discount first
    discounted_base = subtotal - discount
    
    # Ensure balance doesn't drop below zero from an aggressive discount
    base_target = max(discounted_base, 0.0)
    
    # Calculate tax overhead and sum final total
    total_tax = base_target * tax_rate
    grand_total = base_target + total_tax
    
    return round(grand_total, 2)

# Execution Instance 1: Using default parameters
standard_total = calculate_invoice_total(100.00)
print(f"Standard Invoice Total: \${standard_total}")  # Output: \$108.0

# Execution Instance 2: Overriding defaults with named keyword arguments
vip_total = calculate_invoice_total(subtotal=250.00, tax_rate=0.05, discount=50.00)
print(f"VIP Custom Invoice Total: \${vip_total}")  # Output: \$210.0
`
  },
  operators: {
    title: "Operators",
    desc: "Operators are specialized programmatic symbols used to execute mathematical computations, state mutations, logical conditional combinations, and inequality comparisons. They serve as the functional logic gates within software applications. Arithmetic operators transform numerical raw data, assignment operators modify underlying variables, comparison operators evaluate conditions to yield booleans, and logical operators join complex relational evaluations to direct the path of code execution.",
    code: `
# =====================================================================
# ARITHMETIC, COMPARISON, AND LOGICAL OPERATORS
# =====================================================================

# Base operands for computation
alpha = 15
beta = 4

# --- Arithmetic Operations ---
sum_result = alpha + beta        # Addition -> 19
power_result = alpha ** beta     # Exponentiation (15 to the power of 4) -> 50625
floor_div = alpha // beta       # Floor Division (Divides and rounds down) -> 3
modulo_rem = alpha % beta        # Modulo (Extracts structural remainder) -> 3

# --- Comparison & Relational Operators ---
# Evaluates expressions to return strict boolean results
is_greater = alpha > beta        # True
is_equal = (alpha == 15)         # True
is_not_equal = alpha != beta     # True

# --- Logical Operators (Condition Chaining) ---
# Used to handle complex, multi-variable logic switching
has_high_clearance = True
requires_two_factor = False

# Evaluates True only if both independent assertions pass
allow_access = has_high_clearance and (alpha > 10)

# Evaluates True if at least one parameter criteria is met
trigger_alert = requires_two_factor or (beta == 99)
`
  },
  list_comp: {
    title: "List Comprehension",
    desc: "List comprehension provides an elegant, highly optimized shorthand syntax within Python to construct brand new lists dynamically from existing iterables. It replaces multi-line loops and manual list mutations with a single readable line of code. This mechanism allows you to loop through an iterable, apply transformations to elements, and conditionally filter out unneeded items on the fly, drastically lowering overhead and maximizing processing performance.",
    code: `
# =====================================================================
# ADVANCED LIST COMPREHENSION AND TRANSFORMATION LOGIC
# =====================================================================

# Primary raw data source array
raw_measurements = [12, -5, 8, 23, -1, 16, 42, 0]

# Goal: Filter out negative numbers and calculate the square of even values
# Traditional Approach (For Context):
# processed_list = []
# for x in raw_measurements:
#     if x > 0 and x % 2 == 0:
#         processed_list.append(x ** 2)

# Elegant, optimized shorthand inline List Comprehension:
refined_squares = [x ** 2 for x in raw_measurements if x > 0 and x % 2 == 0]

print(f"Original Dataset: {raw_measurements}")
print(f"Processed Squares (Positive Evens Only): {refined_squares}")

# Inline conditional expressions (If/Else transformation syntax):
# Labeling data points dynamically based on value metrics
data_labels = ["High" if x >= 15 else "Low" for x in raw_measurements]
print(f"Data Scale Labels: {data_labels}")
`
  },
  try_except: {
    title: "Try / Except Handling",
    desc: "Try/Except blocks implement defensive programming by intercepting unexpected execution faults, edge-case mathematical failures, or syntax crashes at runtime. Instead of letting an unhandled error completely terminate the script or crash an production app, exception handling captures the specific error object. This allows the system to log the error, notify administrators, or execute alternative recovery routines cleanly, while keeping user processes up and running.",
    code: `
# =====================================================================
# DEFENSIVE ERROR HANDLING AND EXCEPTION MAPPING
# =====================================================================

def execute_secure_division(payload_dict):
    """Safely extracts dictionary values and divides them."""
    try:
        # Intentionally fetching key values that may or may not exist safely
        numerator = payload_dict["numerator"]
        denominator = payload_dict["denominator"]
        
        # Risk point: Throws ZeroDivisionError if denominator is 0
        calculation_result = numerator / denominator
        
    except KeyError as key_err:
        # Captures instances where key lookups fail within collection targets
        return f"Processing Failure: Missing expected payload key -> {key_err}"
        
    except ZeroDivisionError:
        # Captures mathematical impossibility vectors smoothly
        return "Processing Failure: Division by zero is strictly prohibited."
        
    except Exception as general_err:
        # Universal fallback safety net for completely unpredicted anomalies
        return f"Unexpected system exception intercepted: {general_err}"
        
    else:
        # Executes automatically only if the 'try' block succeeds with zero faults
        return f"Calculation completed successfully: {calculation_result}"
        
    finally:
        # Critical cleanup layer: Always executes regardless of successes or failures
        // Critical cleanup layer: Always executes regardless of successes or failures
        print("[System Audit Log]: Completed processing cycle evaluation.")

# Testing individual fault pathways
print(execute_secure_division({"numerator": 50, "denominator": 0})) # Zero division trigger
print(execute_secure_division({"numerator": 100}))                  # Key error trigger
print(execute_secure_division({"numerator": 100, "denominator": 5})) # Success trigger
`
  },
  file_handling: {
    title: "File I/O Handling",
    desc: "File Input/Output tracking handles reading and writing persistent data directly to long-term hardware storage disks. Modern applications open system storage connections using a context manager ('with' statement). This setup guarantees that file connection channels are safely closed automatically when operations finish—even if unexpected crashes occur midway through streaming data. This approach prevents memory leaks and file corruption.",
    code: `
# =====================================================================
# MODERN CONTROLS FOR FILE PERSISTENCE VIA CONTEXT MANAGERS
# =====================================================================

target_file_path = "system_diagnostic.log"

# --- Writing and Streaming Payload Targets ---
# 'w' mode overwrites existing content; use 'a' to append cleanly instead
with open(target_file_path, "w", encoding="utf-8") as file_writer:
    file_writer.write("--- SYSTEM AUDIT STATUS INITIALIZED ---\\n")
    file_writer.write("STATUS: OPERATIONAL\\n")
    file_writer.write("SECURITY MODULE: ACTIVE\\n")

print(f"Data safely written out to disk target: {target_file_path}")

# --- Reading Data Asset Payloads Back ---
# Context manager opens the line, handles input string streaming, and closes down
try:
    with open(target_file_path, "r", encoding="utf-8") as file_reader:
        # Read the file's raw layout in its entirety
        retrieved_logs = file_reader.read()
        
    print("\\n--- Displaying Recovered File Contents ---")
    print(retrieved_logs)
    
except FileNotFoundError:
    print(f"Critical Error: File target location '{target_file_path}' could not be resolved.")
`
  },
  oop: {
    title: "OOP Core Principles",
    desc: "Object-Oriented Programming (OOP) centers structural architecture around modular data packages called Objects rather than simple detached functional logic scripts. OOP relies on four core pillars: Encapsulation (hiding inner state variables behind private access methods), Inheritance (allowing child blueprints to reuse properties from parent structures), Polymorphism (giving different object types a uniform execution interface), and Abstraction (hiding complex background work behind simple outward interfaces).",
    code: `
# =====================================================================
# OBJECT-ORIENTED PROGRAMMING CORE PRINCIPLES & POLYMORPHISM
# =====================================================================

class AutonomousVehicle:
    """Parent base template defining shared operational structures."""
    def __init__(self, serial_id, power_source):
        self.serial_id = serial_id          # Instance attribute
        self.power_source = power_source    # Instance attribute

    def compute_travel_vector(self):
        """Abstract method placeholder meant to be overridden by child entities."""
        raise NotImplementedError("Subclasses must implement abstract vector routes.")

class QuadcopterDrone(AutonomousVehicle):
    """Child template illustrating inheritance and targeted Polymorphism."""
    def __init__(self, serial_id, power_source, rotor_count):
        # Trigger parent class constructor setup sequence
        super().__init__(serial_id, power_source)
        self.rotor_count = rotor_count      # Unique child property

    def compute_travel_vector(self):
        # Polymorphic override matching uniform execution framework interfaces
        return f"Drone {self.serial_id} calculating 3D grid vectors using {self.rotor_count} flight rotors."

class DeliveryRover(AutonomousVehicle):
    """Alternative child template illustrating specialized polymorphism behavior."""
    def compute_travel_vector(self):
        return f"Rover {self.serial_id} planning 2D ground coordinates to conserve {self.power_source} reserves."

# Instantiating polymorphic object profiles into an array iterable collection
fleet_deployment = [
    QuadcopterDrone(serial_id="NX-400", power_source="Lithium-Ion", rotor_count=4),
    DeliveryRover(serial_id="RV-90", power_source="Solar-Battery")
]

# Triggering uniform interface calls regardless of distinct underlying structural types
print("--- Launching Fleet Navigation Operations ---")
for vehicle in fleet_deployment:
    print(vehicle.compute_travel_vector())
`
  },
  classes: {
    title: "Classes & Objects",
    desc: "A Class functions as a formal schematic template or architectural blueprint that dictates exactly what properties and capabilities an item will possess. An Object represents a concrete, living instance instantiated directly from that class blueprint. The class specifies the structure, while individual objects allocate active space in system memory to maintain their own unique state values and handle their own actions.",
    code: `
# =====================================================================
# CLASS STRUCTURAL SCHEMATICS AND INSTANCE INITIALIZATION
# =====================================================================

class SoftwareEngineer:
    """Defines structural blueprints outlining a corporate programmer."""
    
    # Class Attribute: Shared universally across all individual instances
    industry_domain = "Technology & Software Development"

    # Constructor Matrix Method: Initializes specific custom instance values
    def __init__(self, full_name, core_language, years_experience):
        self.name = full_name                     # Instance property
        self.language = core_language             # Instance property
        self.experience = years_experience        # Instance property

    def generate_profile_summary(self):
        """Instance execution method leveraging underlying internal attributes."""
        return f"Engineer: {self.name} | Stack: {self.language} | Tenure: {self.experience} Years"

    def promote_tenure(self, added_years):
        """Mutates instance values safely from internal utility code paths."""
        self.experience += added_years
        print(f"[System Update]: {self.name} has been credited with {added_years} year(s) experience.")

# --- Instantiating Concrete Object Entities ---
# Constructing living standalone elements directly out of class schematics
lead_developer = SoftwareEngineer("Alice Vance", "Python / Go", 7)
junior_developer = SoftwareEngineer("Bob Smith", "JavaScript / TypeScript", 2)

# Interrogating data values mapped to distinct object locations
print(lead_developer.generate_profile_summary())
print(junior_developer.generate_profile_summary())

# Executing targeted object mutations safely
junior_developer.promote_tenure(2)
print(junior_developer.generate_profile_summary())

# Accessing global tier class parameters
print(f"Global Domain Mapping: {SoftwareEngineer.industry_domain}")
`
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

