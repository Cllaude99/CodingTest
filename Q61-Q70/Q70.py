import sys
sys.setrecursionlimit(10 ** 6)
input = sys.stdin.readline

N = int(input())
arr = [[] for _ in range(26)]

for _ in range(N):
    node, left, right = input().split()
    arr[ord(node) - ord('A')].append((left, right))


def preorder(node):
    if node != '.':
        left, right = arr[ord(node) - ord('A')][0]
        print(node, end='')
        preorder(left)
        preorder(right)


def inorder(node):
    if node != '.':
        left, right = arr[ord(node) - ord('A')][0]
        inorder(left)
        print(node, end='')
        inorder(right)


def postorder(node):
    if node != '.':
        left, right = arr[ord(node) - ord('A')][0]
        postorder(left)
        postorder(right)
        print(node, end='')


preorder('A')
print()
inorder('A')
print()
postorder('A')
