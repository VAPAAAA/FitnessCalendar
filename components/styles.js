// styles.js
export const colors = {
  primary: '#3498db',
  text: '#333',
};

export const commonStyles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // Set background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 20,
  },
  statsContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
  },
  statsText: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 10,
  },
  workoutListContainer: {
    marginBottom: 20,
  },
  workout: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
  },
  workoutText: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 5,
  },
};
