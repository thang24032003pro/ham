function scanVirusRecursive(node) {
    let infectedFiles = [];

    if (node.type === "file") {
        if (node.name.endsWith(".exe")) {
            infectedFiles.push(node.name);
        }
        return infectedFiles;
    }

    if (!node.children || node.children.length === 0) {
        return infectedFiles;
    }

    for (let i = 0; i < node.children.length; i++) {
        let childResult = scanVirusRecursive(node.children[i]);
        infectedFiles = infectedFiles.concat(childResult);
    }

    return infectedFiles;
}

const fileSystem = {
    name: "C:",
    type: "folder",
    children: [
        { name: "document.pdf", type: "file" },
        { 
            name: "System", type: "folder", children: [
                { name: "config.json", type: "file" },
                { 
                    name: "HiddenFolder", type: "folder", children: [
                        { name: "safe_file.txt", type: "file" },
                        { name: "virus1.exe", type: "file" }, 
                        {
                            name: "DeepFolder", type: "folder", children: [
                                { name: "virus_nguy_hiem.exe", type: "file" } 
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

console.log("=== KẾT QUẢ QUÉT VIRUS ===");
console.log("Danh sách virus tìm được:", scanVirusRecursive(fileSystem));