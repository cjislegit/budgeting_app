//react imports
import { useEffect, useRef } from 'react';

//rrd imports
import { Form, useFetcher } from 'react-router-dom';

// library imports
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';

const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === 'submitting';

  const formRef = useRef();
  const focusRef = useRef();

  //Clears the form after it is done submitting and moves focus to newBudget input
  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);
  return (
    <div className='form-wrapper'>
      <h2 className='h3'>Create budget</h2>
      <fetcher.Form method='post' className='grid-sm' ref={formRef}>
        <div className='grid-xs'>
          <label htmlFor='newBudget'>Budegt Name</label>
          <input
            type='text'
            name='newBudget'
            id='newBudget'
            placeholder='e.g., Groceries'
            required
            ref={focusRef}
          />
        </div>
        <div className='grid-xs'>
          <label htmlFor='newBudgetAmount'>Amount</label>
          <input
            type='number'
            step='0.01'
            name='newBudgetAmount'
            id='newBudgetAmount'
            placeholder='e.g., $1738'
            required
            inputMode='decimal'
          />
          <input type='hidden' name='_action' value='createBudget' />
          <button
            type='submit'
            className='btn btn--dark'
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span>Submitting..</span>
            ) : (
              <>
                <span>Create budget</span>
                <CurrencyDollarIcon width={20} />
              </>
            )}
          </button>
        </div>
      </fetcher.Form>
    </div>
  );
};

export default AddBudgetForm;
