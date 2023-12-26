# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# code 
## import java.io.IOException;
## import java.util.StringTokenizer;
## import org.apache.hadoop.conf.Configuration;
## import org.apache.hadoop.fs.Path;
## import org.apache.hadoop.io.IntWritable;
## import org.apache.hadoop.io.Text;
## import org.apache.hadoop.mapreduce.Job;
## import org.apache.hadoop.mapreduce.Mapper;
## import org.apache.hadoop.mapreduce.Reducer;
## import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
## import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;

## public class WordCount {

## public static class TokenizerMapper extends Mapper<Object, Text, Text, IntWritable> {
## private final static IntWritable one = new IntWritable(1);
## private Text word = new Text();

## public void map(Object key, Text value, Context context) throws IOException, InterruptedException {
## StringTokenizer itr = new StringTokenizer(value.toString());
## while (itr.hasMoreTokens()) {
## word.set(itr.nextToken());
## context.write(word, one);
## }
## }
## }

## public static class IntSumReducer extends Reducer<Text, IntWritable, Text, IntWritable> {
## private IntWritable result = new IntWritable();

## public void reduce(Text key, Iterable<IntWritable> values, Context context)
## throws IOException, InterruptedException {
## int sum = 0;
## for (IntWritable val : values) {
## sum += val.get();
## }
## result.set(sum);
## context.write(key, result);
## }
## }

## public static void main(String[] args) throws Exception {
## Configuration conf = new Configuration();
## Job job = Job.getInstance(conf, "word count");
## job.setJarByClass(WordCount.class);
## job.setMapperClass(TokenizerMapper.class);
## job.setCombinerClass(IntSumReducer.class);
## job.setReducerClass(IntSumReducer.class);
## job.setOutputKeyClass(Text.class);
## job.setOutputValueClass(IntWritable.class);
## FileInputFormat.addInputPath(job, new Path(args[0]));
## FileOutputFormat.setOutputPath(job, new Path(args[1]));
## System.exit(job.waitForCompletion(true) ? 0 : 1);
## }
## }

