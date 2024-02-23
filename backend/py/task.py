from dataclasses import dataclass
from collections import Counter

@dataclass
class File:
    id: int
    name: str
    categories: list[str]
    parent: int
    size: int

# file node in a tree
class Node:
    def __init__(self, file):
        self.file = file
        self.children = []
    def add_child(self, child):
        self.children.append(child)
    def is_leaf(self):
        return len(self.children) == 0

# converts list of files to a tree
def treeify(files: list[File]) -> Node:
    root = Node(None)
    node_dict = {}
    # Create nodes for all files
    for file in files:
        node_dict[file.id] = Node(file)
    # Assign children to parent
    for file in files:
        if file.parent == -1:
            root.add_child(node_dict[file.id])
        else:
            node_dict[file.parent].add_child(node_dict[file.id])

    return root

"""
Task 1
"""
def leafFiles(files: list[File]) -> list[str]:
    root = treeify(files)
    if len(root.children) == 0: # arg was an empty list
        return []
    return sum([doLeafFiles(child) for child in root.children], [])

def doLeafFiles(root: Node) -> list[str]:
    if root.is_leaf():
        return [root.file.name]
    else:
        return sum([doLeafFiles(child) for child in root.children], [])

"""
Task 2
"""
def kLargestCategories(files: list[File], k: int) -> list[str]:
    categories = Counter()
    # count categories
    for file in files:
        categories.update(file.categories)
    # sort categories
    categories = sorted(categories.items(), key=lambda x: x[0])
    # get most common
    categories = Counter(dict(categories))
    return [cat[0] for cat in categories.most_common(k)]


"""
Task 3
"""
def largestFileSize(files: list[File]) -> int:
    root = treeify(files)
    if len(root.children) == 0: # no files
        return 0
    return max([doFileSize(child) for child in root.children])

def doFileSize(root: Node) -> list[str]:
    if root.is_leaf():
        return root.file.size
    else:
        return sum([doFileSize(child) for child in root.children], 0)


if __name__ == '__main__':
    testFiles = [
        File(1, "Document.txt", ["Documents"], 3, 1024),
        File(2, "Image.jpg", ["Media", "Photos"], 34, 2048),
        File(3, "Folder", ["Folder"], -1, 0),
        File(5, "Spreadsheet.xlsx", ["Documents", "Excel"], 3, 4096),
        File(8, "Backup.zip", ["Backup"], 233, 8192),
        File(13, "Presentation.pptx", ["Documents", "Presentation"], 3, 3072),
        File(21, "Video.mp4", ["Media", "Videos"], 34, 6144),
        File(34, "Folder2", ["Folder"], 3, 0),
        File(55, "Code.py", ["Programming"], -1, 1536),
        File(89, "Audio.mp3", ["Media", "Audio"], 34, 2560),
        File(144, "Spreadsheet2.xlsx", ["Documents", "Excel"], 3, 2048),
        File(233, "Folder3", ["Folder"], -1, 4096),
    ]

    assert sorted(leafFiles(testFiles)) == [
        "Audio.mp3",
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx",
        "Video.mp4"
    ]

    assert kLargestCategories(testFiles, 3) == [
        "Documents", "Folder", "Media"
    ]

    assert largestFileSize(testFiles) == 20992
