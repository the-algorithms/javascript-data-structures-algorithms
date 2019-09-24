/*

https://repl.it/@parvezk/T4-Specialized-DOUBLY-LINKED-LIST

#include <cstddef>
#include <iostream>
#include <cstdlib>
using namespace std;

typedef int ItemType;
struct NodeType
{
  int info;
  NodeType* next;
  NodeType* back;
};

class SpecializedList
{
  private:
    NodeType* list;
    NodeType* currentNextPos;
    NodeType* currentBackPos;
  
  public:
    SpecializedList();
    ~SpecializedList();
    SpecializedList (const SpecializedList &rhs);
    SpecializedList &operator=(const SpecializedList &rhs);
    void PutFront(ItemType item);
    void PutBack(ItemType item);
    NodeType GetNextItem() const;
    NodeType GetPriorItem() const;
};

SpecializedList::SpecializedList()
{
  list = NULL;
}

void SpecializedList::PutFront(ItemType item)
{
  NodeType* newNode = new NodeType;
  newNode->info = item;

  if (list == NULL)
  {
    newNode->next = newNode;
    newNode->back = newNode;
    list = newNode;
  }
  else {
    list->next->back = newNode;
    list->next = newNode;
  }
}

void SpecializedList::PutBack(ItemType item)
{
  PutFront(item);
  list = list->next;
}

int main() {
  
  SpecializedList* SP = new SpecializedList;
  SP->PutFront(45);
  SP->PutFront(32);
  SP->PutBack(55);
  
  return 0;
}
 */
