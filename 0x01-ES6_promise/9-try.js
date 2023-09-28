export default function guardrail(mathFunction) {
    const queue = [];
    try {
        const mathFun = mathFunction();
        queue.push(mathFun);
    } catch (error) {
        queue.push(error.message);
    } finally {
        queue.push('Guardrail was processed');
    }
    return queue;
  }
