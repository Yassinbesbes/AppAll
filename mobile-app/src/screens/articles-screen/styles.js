const styles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2', // Light background for a fresh look
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  hospitalizationContainer: {
    marginTop: 10,
  },
  hospitalizationCard: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4, // For Android shadow
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2980b9',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 8,
  },
  loadingText: {
    fontSize: 18,
    color: '#95a5a6',
    textAlign: 'center',
    marginTop: 20,
  },
};

export default styles;
