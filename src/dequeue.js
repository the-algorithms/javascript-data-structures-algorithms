// DEQUEUE (TWO WAY) ////////////////////////////////////////////////

/*

class QueueTwoStacks
{
private:
    stack<int> inStack_;
    stack<int> outStack_;

public:
    void enqueue(int item)
    {
        inStack_.push(item);
    }
    int dequeue()
    {
       while(!inStack_.empty())
       {
         int i = inStack_.top();
         inStack_.pop();
         outStack_.push(i);
       }
       int top = outStack_.top();
       outStack_.pop();
       while(!outStack_.empty())
       {
         int k = outStack_.top();
         outStack_.pop();
         inStack_.push(k);
       }
        return top;
    }
};
*/
