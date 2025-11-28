import sys
import requests
import json
from typing import Any

def type_of(value: Any):
    type_value=type(value)
    if type_value is None:
        return type_of(value).__name__
    elif type_value == str:
        return "string"
    elif type_value == int or type_value == float:
        return "number"
    elif type_value == bool:
        return "boolean"
    elif type_value == list:
        return "any[]"
    elif type_value == dict:
        return "any"
    else:
        return "any"

def main():
    if len(sys.argv) != 4:
        print("Usage: python interface_API.py <API_URL> <output_file.ts> <interface_name>")
        sys.exit(1)
    url = sys.argv[1]
    output_file = sys.argv[2]
    interface_name = sys.argv[3]

    try:
        resp = requests.get(url)
        resp.raise_for_status()
        data = resp.json()
        print("Fetched API response successfully.")
        # Extract keys and types for the root interface
        interface_name = "ApiResponse"
        interface_keys = data[0].keys()
        with open(output_file, "w") as f:
            f.write(f"export interface {interface_name} " + "{\n")
            for key in interface_keys:
                  f.write(f"  {key}:" + type_of(data[0][key]) + ";\n")
            f.write("}\n")
        print(f"TypeScript interface written to {output_file}")
        sys.exit(0)
    except Exception as e:
        print(f"Error fetching or parsing API response: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()