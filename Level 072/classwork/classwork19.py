# codewars 8 kyu: Job Matching #1


def match(candidate, job):
    return candidate['min_salary'] * 0.9 <= job['max_salary']