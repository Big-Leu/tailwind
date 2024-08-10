import { useState, useEffect } from 'react';

interface Plan {
    hours: string;
    price: string;
    icon: string[];
    color: string[];
    label: string[];
  }
  
  interface FetchPlansResponse {
    message: string;
    status: string;
    result: Plan[];
    result_length: number;
    metadata: {
      total: number;
      page: number;
      size: number;
      pages: number;
    };
  }
  

export const useFetchPlans = () => {
  const [data, setData] = useState<FetchPlansResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/Base/listplans?page=1&size=50', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data: FetchPlansResponse = await response.json();
        setData(data); // Store the response in state
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        setError(error instanceof Error ? error : new Error('Unknown error occurred'));
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchPlans(); // Call the function to fetch data
  }, []); // Empty dependency array means this effect runs once after initial render

  return { data };
};
